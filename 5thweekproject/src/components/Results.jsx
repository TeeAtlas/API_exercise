import PropTypes from "prop-types"
/* proptypes is not necessary for code to work but is considered 
"best practice" because it helps catch bugs by validating the types of props passed to your components*/

function Results({ data = [] }) {
  return (
    <>
      {data.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </>
  );
}

Results.propTypes = {
  data: PropTypes.array
}

export default Results;