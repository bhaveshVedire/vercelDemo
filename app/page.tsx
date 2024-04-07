import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus augue metus, gravida vel nisi a, lobortis eleifend elit. Vivamus interdum, mauris eu efficitur tempus, nibh lectus malesuada nisi, et porta augue tortor id sapien. Donec aliquet turpis in tortor efficitur, nec efficitur nibh consectetur. Duis cursus ornare sapien nec auctor. Duis blandit urna sed dolor elementum, at lobortis justo fringilla. Mauris interdum odio mauris, ut dapibus leo accumsan nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tincidunt sapien lorem, sed varius tellus mollis ac. Vivamus ac urna auctor, efficitur dui at, faucibus dolor. Quisque sed sagittis sem. Nullam aliquet odio diam, quis porta odio semper non. Cras eget neque vitae sem dignissim scelerisque. Donec sagittis in ligula quis venenatis.

        Integer nec mi erat. Phasellus cursus faucibus viverra. Fusce venenatis magna libero, eu iaculis enim porta ut. Suspendisse vitae vehicula elit, id pharetra diam. Sed mattis orci sit amet sem tincidunt, pulvinar imperdiet nisi aliquet. Fusce suscipit turpis non massa gravida interdum. Phasellus dolor mauris, malesuada at mollis nec, porttitor vitae nibh. Vivamus viverra nunc id eleifend tempus. Duis vel arcu non urna malesuada rhoncus dignissim a dui. Vivamus eget felis vel augue feugiat gravida. Nullam viverra, nulla varius fringilla ullamcorper, ex velit viverra risus, et viverra nisl nibh et ante. Ut placerat dictum erat eu pulvinar. Morbi sit amet lorem fringilla, suscipit libero sed, facilisis nibh. Aliquam maximus bibendum est. Praesent suscipit mi ornare, maximus enim vitae, hendrerit turpis. Sed laoreet tempor velit, sit amet euismod lectus efficitur eu.

        Morbi lectus orci, vehicula a nunc vitae, pellentesque ullamcorper nibh. Nulla sed feugiat sem. Donec quis justo ac risus sodales sollicitudin. Morbi risus ante, pellentesque quis arcu vitae, convallis pulvinar ex. Duis magna ipsum, commodo ut laoreet vel, pellentesque gravida ex. Nullam nec elementum ex, non ornare augue. Phasellus at lacinia arcu. Donec tincidunt enim ut accumsan viverra. Suspendisse potenti. Suspendisse luctus faucibus ipsum, quis porttitor tortor hendrerit vitae. Suspendisse at justo ipsum. In mattis lacus id facilisis vulputate. Mauris felis elit, consequat a vestibulum eget, dictum et erat. Fusce condimentum nisl at maximus bibendum.

        Phasellus id lacus a purus scelerisque ultrices id in nisi. Etiam gravida pulvinar tristique. Donec vulputate, purus vitae molestie tempor, est orci aliquam nisl, at sagittis est arcu id felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean quis ligula feugiat, ullamcorper nisi vel, convallis ligula. Integer vitae massa eu lacus accumsan dignissim. Nullam a ornare ex.

        Praesent in tristique velit. Aenean dapibus non quam non porta. Sed tincidunt efficitur est. Quisque luctus non erat vitae fermentum. Duis in arcu sit amet justo ultrices semper. Sed vel hendrerit massa. Proin nec lectus lacinia, mattis sem vitae, facilisis massa. Integer fringilla dolor et elit venenatis, tincidunt tempor eros sagittis. Aliquam ultricies pretium lorem, a tincidunt leo. Pellentesque placerat, purus a pretium iaculis, metus magna aliquet eros, non lacinia ex lacus convallis nisl. Donec ligula nibh, sodales vitae suscipit sed, feugiat in mi. Donec semper porttitor risus, eu aliquam dui pulvinar eget. Sed aliquet venenatis nunc eget pulvinar.

      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Hi This is Bhavesh Vedire with Yashashwini&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
