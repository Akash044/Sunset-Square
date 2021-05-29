import React from "react";
import { makeStyles,  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const Search = () => {
  const today = new Date().toISOString().substring(0, 10);
  const classes = useStyles();


  return (
    <div className="row mt-5">

      <div className="col-md-5 mb-4">

        <div className="rounded-3 shadow p-4 mb-3 border border-5">
          <h5>LOCATION</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Add city, Landmark, or address"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        {/* arrival and departure section start */}
        <div className="row mb-3 mx-auto ">
          <div className="col-md-6 rounded-3 shadow p-3 border border-5">
            <h5>Arrival</h5>
            <form className={classes.container} noValidate>
              <TextField
                id="arrival"
                type="date"
                defaultValue={today}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
          <div className="col-md-6 rounded-3 shadow p-3 border border-5">
            <h5>Departure</h5>
            <form className={classes.container} noValidate>
              <TextField
                id="departure"
                type="date"
                defaultValue={today}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </div>
        </div>
        {/* arrival and departure section end */}


        {/* selecting seat section start*/}
        <div className="p-2 rounded-3 shadow border border-5">

             <div className="p-3 border border-5 rounded-3">
                 <h4>Adult 2, child 1, Baby 1</h4>
             </div>
           

           {/* adult section */}
           <div className="row p-4 border">
               <div className="col-md-6">
                   <h5>Adults</h5>
               </div>
               <div className="col-md-6">

                   <p><button className="btn"> <h3>-</h3> </button>
                   {today}
                   <button className="btn"> <h3>+</h3></button></p>

               </div>
           </div>

            {/* child section */}
           <div className="row p-3">
               <div className="col-md-6">
                     <h5>Child</h5>
                     <h6>Age 2-12</h6>
               </div>
               <div className="col-md-6">
               <p><button className="btn"> <h3>-</h3> </button>
               {today}
                   <button className="btn"> <h3>+</h3></button></p>
               </div>
           </div>

           {/* babies section */}
           <div className="row p-3">
               <div className="col-md-6">
                <h5>Babies</h5>
                <h6>Younger than 2</h6>
               </div>
               <div className="col-md-6">
               <p><button className="btn"> <h3>-</h3> </button>
               {today}
                   <button className="btn"> <h3>+</h3></button></p>
               </div>
           </div>
        </div>
        {/* selecting seat section end*/}

        {/* Search button */}
       <div onClick={() =>console.log('clicked')} style={{cursor:"pointer"}} className=" p-2 mt-4 d-flex justify-content-center  bg-primary rounded-3 text-white search-button">
        SEARCH
       </div>

      </div>


      <div className="col-md-7"></div>
    </div>
  );
};


const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default Search;
