import {useRouter} from 'next/router'

const DetailPage = props => {
    const router = useRouter();
    const {query} = router;
    const {newsId} = query;
    
    return <>
        <p>{newsId}</p>
        <h1>DetailPage Important</h1>
    </>;
}

export default DetailPage;