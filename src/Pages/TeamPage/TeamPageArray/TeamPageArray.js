import person1 from "../../../ImageAssests/team/1.png";
import person2 from "../../../ImageAssests/team/2.png";
import person3 from "../../../ImageAssests/team/3.png";
import person4 from "../../../ImageAssests/team/4.png";
import person5 from "../../../ImageAssests/team/5.png";
import person6 from "../../../ImageAssests/team/6.png";

const TeamPageArray = () => {
  const myTeam = [
    {
      name: "Luke Miller",
      position: "SalesMan",
      id: 1,
      image: person1,
    },
    {
      name: "Michael Diaz",
      position: "Business Owner",
      id: 2,
      image: person2,
    },
    {
      name: "Brianna Ross",
      position: "Photographer",
      id: 3,
      image: person3,
    },
    {
      name: "Lauren Rivera",
      position: "Detailist",
      id: 4,
      image: person4,
    },
    {
      name: "Martin Rizz",
      position: "Mechanic",
      id: 5,
      image: person5,
    },
    {
      name: "Kaitilin Hunt",
      position: "Manager",
      id: 6,
      image: person6,
    },
  ];
  return myTeam;
};

export default TeamPageArray;
