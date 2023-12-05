import './Header.css'
const Header = (props) => {
  return (
    <>
      <div className="nav_bar">
        <h1>LOGO</h1>
        <ul className='d_flex '>
          {
            props.manu.map((item, index) => {
                return <li key={index}><a href="">{item}</a></li>
            })
          }
        </ul>
      </div>
    </>
  );
};

export default Header;
