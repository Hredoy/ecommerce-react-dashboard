import Header from './Header';
import React , {useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
function Protected(props)
{
    let Cmp = props.Cmp;
    useEffect(()=>{
        if(!localStorage.getItem('userinfo'))
        {
            history.push('/register')
        }
    })
    const history = useHistory();
    return (
        <div>
            <Cmp />
           
        </div>
    );
}
export default Protected