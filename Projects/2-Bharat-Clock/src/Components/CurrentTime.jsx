function CuurentTime(){

  let time = new Date();
  return <p>Current Time is :{time.toLocaleDateString()} - {time.toLocaleTimeString()}  </p>
};
export default CuurentTime;