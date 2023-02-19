import React from 'react';
import SubHomePage from './SubHomePage';
const HomePage = () => {

    
const [page, setPage] = useState([0])

useEffect(() => {
fetch()
.then(result => result.json())
.then(data => setPage(data))

}), []





    
    return (
        <div>
            {

                page.map(data =>  <SubHomePage setUser="data"></SubHomePage>)
            }
            
            
           
        </div>
    );
};

export default HomePage;