
const Collections = () => {
  const TAGS: string[] = ["Profile", " New York", "Relax", "Person", "Fashion"];
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 shadow-lg">
      <h1 className="font-meri text-3xl font-bold"> Popular Collection</h1>
      <div className="mt-6 space-x-2">
        {TAGS.map((tag) => (
          <a
            id={tag}
            className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:text-blue-400"
          >
            {tag}
          </a>
        ))}
      </div>
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/500"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="grow font-popi text-2xl font-medium">People</p>
            <p className="font-popi ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 inline-block h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/500"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="grow font-popi text-2xl font-medium">People</p>
            <p className="font-popi ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 inline-block h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              144
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <img
            src="https://placewaifu.com/image/100"
            alt=""
            className="aspect-video w-full rounded-2xl"
          />
          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="https://placewaifu.com/image/200"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/300"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
            <img
              src="https://placewaifu.com/image/500"
              alt=""
              className="aspect-video w-full rounded-2xl"
            />
          </div>
          <div className="flex pt-6">
            <p className="grow font-popi text-2xl font-medium">People</p>
            <p className="font-popi ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 inline-block h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
