import Image from 'next/image'
import HelloMessage from './HelloMessage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HelloMessage />
    </main>
  );
}
