import Link from "next/link";

const PageNotFound = () => {
    return <div>
         <h1> Page not Found </h1>
         <h3>check page</h3>
         <Link href='/'>Click here to go home</Link>
         </div>
}

export default PageNotFound;