import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import Loader from '../Loader';

// Styles
import classes from './SecondTask.module.scss';

// Services
import { getEnviromentData, getSocialData, getGovernanceData } from '../../services/userService';

// Types
import { Environment, Social, Governance, ESGTypes } from './types';

const SecondTask: FC = () => {
  const [environment, setEnvironment] = useState<Array<Environment>>([]);
  const [social, setSocial] = useState<Array<Social>>([]);
  const [governance, setGovernance] = useState<Array<Governance>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [filter, setFilter] = useState<ESGTypes>({
    'environment': '',
    'social': '',
    'governance': ''
  });

  useEffect(() => {
    getEnviromentData()
      .then((res: any) => {
        if (res) {
          setEnvironment(res.data);
        }
      })

    getSocialData()
      .then((res: any) => {
        if (res) {
          console.log('res', res);
          setSocial(res.data);
        }
      })

    getGovernanceData()
      .then((res: any) => {
        if (res) {

          setGovernance(res.data);
        }
      })
    setIsLoaded(true);
  }, [])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleFilter = (e: React.MouseEvent<HTMLElement>): void => {
    const filterName: string = (e.target as HTMLInputElement).name;
    const arrayMap: Record<string, Array<Environment> | Array<Social> | Array<Governance>> = {
      environment: environment,
      social: social,
      governance: governance,
    };
    const array = arrayMap[filterName];

    const inputValue: string = (filter as any)[filterName];
    if (inputValue) {
      const filteredArray = array.filter((item) => {
        if (filterName === 'environment') {
          return item.date_of_birth.split('-')[0] === filter.environment;
        } else if (filterName === 'social') {
          return item.id.toString() === filter.social;
        } else {
          return item.bank_name.includes(filter.governance);
        }
      });
      if (filterName === 'environment') {
        setEnvironment(filteredArray as Environment[]);
      } else if (filterName === 'social') {
        setSocial(filteredArray as Social[]);
      } else {
        setGovernance(filteredArray as Governance[]);
      }
    } else {
      getDataFromApi(array, filterName);
    }
  }

  const getDataFromApi = (array: Environment[] | Social[] | Governance[] | never[], name: string): void => {
    if (array.length < 10) {
      if (name === 'environment') {
        getEnviromentData()
          .then(res => res)
          .then((res) => {
            console.log('check, res', res)
            if (res) {
              setEnvironment(res.data);
            }
          })
      } else if (name === 'social') {
        getSocialData()
          .then((res) => {
            if (res) {
              setSocial(res.data);
            }
          })
      } else {
        getGovernanceData()
          .then((res) => {
            if (res) {
              setGovernance(res.data);
            }
          })
      }
    }
  }

  return (
    <div className={classes.wireframe}>
      <button><Link to={'/'}>to First Task</Link></button>
      <div className={classes.section}>
        {
          !isLoaded
            ?
            <Loader />
            :
            <>
              <input className={classes.input} name='environment' value={filter?.environment} onChange={handleFilterChange} />
              <button name='environment' onClick={handleFilter}>Filter by date of birth</button>
              <table className={classes.table}>
                <tr>
                  <th>Username</th>
                  <th>Date of birth</th>
                  <th>Country</th>
                </tr>
                {
                  environment.map((item: Environment) => {
                    return <tr>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.date_of_birth}</td>
                    </tr>
                  })
                }
              </table>
            </>
        }
      </div>
      <div className={classes.section}>
        {
          !isLoaded
            ?
            <Loader />
            :
            <>
              <input className={classes.input} name='social' value={filter?.social} onChange={handleFilterChange} />
              <button name='social' onClick={handleFilter}>Filter by id</button>
              <table className={classes.table}>
                <tr>
                  <th>Id</th>
                  <th>City</th>
                  <th>Country</th>
                </tr>
                {
                  social.map((item: Social) => {
                    return <tr>
                      <td>{item.id}</td>
                      <td>{item.city}</td>
                      <td>{item.country}</td>
                    </tr>
                  })
                }
              </table>
            </>
        }
      </div>
      <div className={classes.section}>
        {
          !isLoaded
            ?
            <Loader />
            :
            <>
              <input className={classes.input} name='governance' value={filter?.governance} onChange={handleFilterChange} />
              <button name='governance' onClick={handleFilter}>Get bank name</button>
              <table className={classes.table}>
                <tr>
                  <th>Id</th>
                  <th>Account number</th>
                  <th>Bank name</th>
                </tr>
                {
                  governance.map((item: Governance) => {
                    return <tr>
                      <td>{item.id}</td>
                      <td>{item.account_number}</td>
                      <td>{item.bank_name}</td>
                    </tr>
                  })
                }
              </table>
            </>
        }
      </div>
    </div >
  );
}

export default SecondTask;
