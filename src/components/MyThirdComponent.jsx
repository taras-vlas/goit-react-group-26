//const MyThirdComponent = (props) => {
const MyThirdComponent = ({ children }) => { //дeструктуризували props
    return (
        <div className="third-component">
            <h4>third component</h4>
            
            {children}
        </div>
    );
};

export default MyThirdComponent;