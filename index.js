const $ = (el) => document.querySelector(el);

const $states = $("[name='states']");

fetch("https://randomuser.me/api/?results=10")
  .then((response) => response.json())
  .then(({ results }) => {
    for (let user of results) {
      const $user = `
        <article
      class="h-full aspect-square bg-black p-[2px] rounded-[50%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center [&:hover>img]:scale-[0.98] cursor-pointer"
    >
      <img
        src=${user.picture.large}
        class="rounded-[inherit] transition-all duration-200 ease-in-out"
      />
      <p class="font-thin text-sm mt-2">
        ${user.name.first}
      </p>
    </article>`;
      $states.insertAdjacentHTML("beforeend", $user);
    }
  })
  .catch(null);
