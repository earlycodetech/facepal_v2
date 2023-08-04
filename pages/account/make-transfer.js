import { TextField, Button } from '@mui/material'
import { PastTransactions } from '../components/PastTransactions'
import Link from 'next/link'
export default function MakeTransfer() {
    return (
      <main className="px-6 sm:px-10 md:px-20 ">
        <h1 className="text-indigo-800 text-4xl sm:text-6xl font-mono font-bold">
          facepal
        </h1>

        <section className=" flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6 mt-6 rounded-sm">
          <article className="bg-rose-300 p-4 rounded-lg">
            <h3 className="text-2xl ">Make Transfer</h3>
            <form className="w-full flex flex-col gap-4 mt-4">
              <TextField
                id="outlined-basic"
                label="Account Email"
                variant="outlined"
                color="secondary"
              />
              <p>Chioma Ukoha</p>
              <TextField
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                color="secondary"
              />

              <Button variant="contained" color="secondary">
                Tranfer
              </Button>
            </form>
          </article>
          <aside className="border border-gray-200 p-4 rounded-xl">
            <h3 className="text-2xl ">Recent Transfers</h3>
            <ul className="h-[400px] flex flex-col gap-3 overflow-y-scroll">
              <PastTransactions
                recipient="Mary Adewale"
                email="mar@interswitch.com"
                amount={46000}
                time="13 hours"
              />
              <PastTransactions
                recipient="Mary Adewale"
                email="mar@interswitch.com"
                amount={46000}
                time="13 hours"
              />
              <PastTransactions
                recipient="Mary Adewale"
                email="mar@interswitch.com"
                amount={46000}
                time="13 hours"
              />
              <PastTransactions
                recipient="Mary Adewale"
                email="mar@interswitch.com"
                amount={46000}
                time="13 hours"
              />
              <PastTransactions
                recipient="Mary Adewale"
                email="mar@interswitch.com"
                amount={46000}
                time="13 hours"
              />
              <PastTransactions
                recipient="Mary Adewale"
                email="mar@interswitch.com"
                amount={46000}
                time="13 hours"
              />
              <PastTransactions
                recipient="Mary Adewale"
                email="mar@interswitch.com"
                amount={46000}
                time="13 hours"
                        />
                     <Link href="/account/transfer-history">All Transfer History</Link>
            </ul>
          </aside>
        </section>
      </main>
    );
} 