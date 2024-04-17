export const Home = (props) => {
    const {threads} = props;

    return(
        <>
            <main className='flex flex-col items-center bg-slate-100'>
                <h2>新着スレッド</h2>
                <ul>
                    {threads.map((thread) => (
                        <li key={thread.id} className='bg-white border border-gray-950 p-1 m-1'>{thread.title}</li>
                    ))}
                </ul>
            </main>
        </>
    )  
}