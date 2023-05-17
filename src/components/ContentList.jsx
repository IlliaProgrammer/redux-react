
import ContentComp from './ContentComp';
import {useSelector} from 'react-redux'

const ContentList = () => {

    const {content} = useSelector((state) => state.content);
    console.log(content)
 

    return (
        <div>
            {(content).map((pub, index) => (
                <ContentComp key={index} publication={pub} />
            ))}
        </div>
    );
};

export default ContentList;