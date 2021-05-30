import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAdultsTicket,
  decrementBabiesTicket,
  decrementChildTicket,
  incrementAdultsTicket,
  incrementBabiesTicket,
  incrementChildTicket,
  middleware,
  setArrivalDate,
  setDepartureDate,
  setLocation,
} from "../../redux/actions/actions";
import Experiences from "./Experiences";
import Navbar from "../Home/Navbar";

const Search = () => {
  const today = new Date().toISOString().substring(0, 10);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(middleware());
  }, [dispatch]);

  
  const adults = useSelector((state) => {
    return state.forms.adults;
  });
  const child = useSelector((state) => {
    return state.forms.child;
  });
  const babies = useSelector((state) => {
    return state.forms.babies;
  });
  // const arrival = useSelector(state => {
  //   return state.forms.arrival;
  // })
  // const departure = useSelector(state => {
  //   return state.forms.departure;
  // })
  const eData = useSelector((state) => {
    return state.forms.experiences;
  });

  // console.log(arrival, departure);
  return (<><Navbar />
    <div className="row mt-5">
      <div className="col-md-4 mb-4">
        <h4>Where do you want to go</h4>
        <div className="rounded-3 shadow p-4 mb-3 mt-4 border border-5">
          <h5>LOCATION</h5>
          <input
            type="text"
            className="form-control"
            placeholder="Add city, Landmark, or address"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onBlur = {(e)=> dispatch(setLocation(e.target.value))}
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
                onChange={(e) => dispatch(setArrivalDate(e.target.value))}
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
                onChange={(e) => dispatch(setDepartureDate(e.target.value))}
              />
            </form>
          </div>
        </div>
        {/* arrival and departure section end */}

        {/* selecting seat section start*/}
        <div className="p-2 rounded-3 shadow border border-5">
          <div className="p-3 border border-5 rounded-3">
            <h4>{`Adult ${adults}, Child ${child}, Baby ${babies}`}</h4>
          </div>

          {/* adult section */}
          <div className="row p-4 border">
            <div className="col-md-6">
              <h5>Adults</h5>
            </div>
            <div className="col-md-6">
              <p>
                <button
                  className="btn"
                  onClick={() => dispatch(decrementAdultsTicket())}
                >
                  {" "}
                  <h3>-</h3>
                </button>
                {"   "}{ adults }{"   "}
                <button
                  className="btn"
                  onClick={() => dispatch(incrementAdultsTicket())}
                >
                  {" "}
                  <h3>+</h3>
                </button>
              </p>
            </div>
          </div>

          {/* child section */}
          <div className="row p-3 border">
            <div className="col-md-6">
              <h5>Child</h5>
              <h6>Age 2-12</h6>
            </div>
            <div className="col-md-6">
              <p>
                <button
                  className="btn"
                  onClick={() => dispatch(decrementChildTicket())}
                >
                  {" "}
                  <h3>-</h3>{" "}
                </button>
                {child}
                <button
                  className="btn"
                  onClick={() => dispatch(incrementChildTicket())}
                >
                  {" "}
                  <h3>+</h3>
                </button>
              </p>
            </div>
          </div>

          {/* babies section */}
          <div className="row p-3">
            <div className="col-md-6">
              <h5>Babies</h5>
              <h6>Younger than 2</h6>
            </div>
            <div className="col-md-6">
              <p>
                <button
                  className="btn"
                  onClick={() => dispatch(decrementBabiesTicket())}
                >
                  {" "}
                  <h3>-</h3>{" "}
                </button>
                {babies}
                <button
                  className="btn"
                  onClick={() => dispatch(incrementBabiesTicket())}
                >
                  {" "}
                  <h3>+</h3>
                </button>
              </p>
            </div>
          </div>
        </div>
        {/* selecting seat section end*/}

        {/* Search button */}
        <div
          onClick={() => console.log("clicked")}
          style={{ cursor: "pointer" }}
          className=" p-2 mt-4 d-flex justify-content-center  bg-primary rounded-3 text-white search-button"
        >
          SEARCH
        </div>
      </div>

      <div className="col-md-8">
        <h4>Experiences</h4>
        <div className="row mt-4">
          {eData?.map((ed) => (
            <Experiences key={ed._id} experience={ed}></Experiences>
          ))}
        </div>
      </div>
    </div></>
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
