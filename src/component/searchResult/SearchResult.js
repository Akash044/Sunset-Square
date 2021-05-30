import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { middleware2,} from "../../redux/actions/actions";
import { GoogleMap } from '../GoogleMap/GoogleMap';
import Navbar from '../Home/Navbar';
import Result from './Result';

const SearchResult = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(middleware2());
    },[dispatch])
     const searchResult = useSelector(state =>{
         return state.forms.searchInfo;
     })
     const adults = useSelector((state) => {
        return state.forms.adults;
      });
      const child = useSelector((state) => {
        return state.forms.child;
      });
      const babies = useSelector((state) => {
        return state.forms.babies;
      });
      const arrival = useSelector((state) => {
        return state.forms.arrival;
      });
      const departure = useSelector((state) => {
        return state.forms.departure;
      });
      const loc = useSelector((state) => {
        return state.forms.location;
      });
     console.log(searchResult);
    return (<><Navbar />

        <div className="ms-5">
            <h5>
                Stay in {loc}<br/>
                Date: {arrival} to {departure} <br/>
                Adult: {adults} <br/>
                Child: {child} <br/>
                Babies: {babies} <br/>

            </h5>
        </div>
        <div className="row">

            <div className="col-md-4">
                <div className="ms-5">
                    {
                       searchResult?.map(sr => <Result key={sr._id} result={sr} ></Result>)
                    }
                </div>

            </div>
            <div className="col-md-8">
                  <div>
                      <GoogleMap />
                  </div>
            </div>
            
        </div></>
    );
};

export default SearchResult;