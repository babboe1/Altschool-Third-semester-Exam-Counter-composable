export const magicLine = ( ref, value ) => {
   console.log(ref);
   ref.className = 'nav-bar__list--after';
   ref.classList.add(`${value}`);
};
