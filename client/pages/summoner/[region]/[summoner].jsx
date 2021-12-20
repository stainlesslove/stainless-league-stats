import { useRouter } from 'next/router';

export default function Summoner() {
    const router = useRouter();
    return (
        <div>
            <h1>summoner: {router.query.summoner}</h1>
            <h1>region: {router.query.region}</h1>
        </div>
    )
}