/**
 * @name appendQuote
 *
 * @description appends list element with kanye quote and remove button.
 *              kanye quote is retreived using fetch.
 *
 * @param {HTMLElement} listRef <ul> or <ol> list element
 *
 * @returns {void}
 */
const appendQuote = async listRef => {
  const listItem = document.createElement("li");

  const removeButton = document.createElement("button");
  removeButton.innerText = "X";
  removeButton.addEventListener("click", () => {
    listRef.removeChild(listItem);
  });
  /**
   * awaits fetch promise that resolves response by returning it as a JSON.
   */
  const response = await fetch("https://api.kanye.rest").then(res =>
    res.json()
  );
  /**
   * kanye response object schema:
   *  {quote: string}
   */
  listItem.innerText = response.quote; //first adds quote as inner text to list element.
  listItem.appendChild(removeButton); //then adds remove button to list element.
  listRef.appendChild(listItem); //finally adds list element to the list.
};
const list = document.getElementById("list");
const button = document.getElementById("add-bttn");

/**
 * element.addEventListener(event, callbackFunction)
 *
 * callback function must be a function so it can be invoked.
 * For example if   Add = (x,y) => x + y;
 *
 * callback = () => Add(2,2)
 * callback() = Add(2,2) = 4
 *
 * callback = Add(2,2) = 4
 * callback() = Error 4() is not a function
 *
 */
button.addEventListener("click", appendQuote(list));
