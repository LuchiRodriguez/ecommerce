import { useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import PropTypes from "prop-types";

export const UserProvider = ({ children }) => {
  //Get user
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/users/1")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  //Get name
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);

  useEffect(() => {
    const long = user?.name.firstname.length;
    const firstLetter = user?.name.firstname[0].toUpperCase();
    const restName = user?.name.firstname.slice(1, long);
    setFirstname(`${firstLetter}${restName}`);
  }, [user]);

  useEffect(() => {
    const long = user?.name.lastname.length;
    const firstLetter = user?.name.lastname[0].toUpperCase();
    const restName = user?.name.lastname.slice(1, long);
    setLastname(`${firstLetter}${restName}`);
  }, [user]);

  //Get city
  const [city, setCity] = useState(null);

  useEffect(() => {
    const long = user?.address.city.length;
    const firstLetter = user?.address.city[0].toUpperCase();
    const restName = user?.address.city.slice(1, long);
    setCity(`${firstLetter}${restName}`);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        firstname,
        lastname,
        city,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};
