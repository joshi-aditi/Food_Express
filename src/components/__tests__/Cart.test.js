import { fireEvent, render , screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json"
import {act} from "react-dom/test-utils"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("Should render resmenu component", async ()=>{
    await act(async()=>
        render(
        <Provider store={appStore}>
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
            <Cart/>
        <RestaurantMenu/>
        </Provider>)
    )

    /*const itemCategory = screen.getAllByTestId("item-category")
    console.log(itemCategory[0])
    expect(itemCategory.length).toBe(5)
    console.log(itemCategory[0]);
    fireEvent.click(itemCategory[0]);
    console.log(document.body.innerHTML);
    const btn = screen.getAllByRole("button");
    expect(btn.length).toBe(15);

    const addBtn = screen.getAllByRole("button", {name:"ADD + "});
    expect(addBtn.length).toBe(15);
    */

    const accordianHeader = screen.getByText("Dessert (4)");
    // expect(accordianHeader).toBeInTheDocument();
    fireEvent.click(accordianHeader);

    const items = screen.getAllByTestId("items");
    expect(items.length).toBe(4);
    // const addBtn = screen.getAllByTestId("AddBtn");
    // expect(addBtn.length).toBe(4);
    const addBtn = screen.getAllByRole("button",{name:"ADD +"});
    expect(addBtn.length).toBe(4);

    fireEvent.click(addBtn[0]);

    const cartItem = screen.getByText("Cart - (1 Items)")
    expect(cartItem).toBeInTheDocument();

    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument();
    // fireEvent.click(addBtn[2]);
    // expect(screen.getByText("Cart - (3 Items)")).toBeInTheDocument(); 
    // fireEvent.click(addBtn[3]);
    // expect(screen.getByText("Cart - (4 Items)")).toBeInTheDocument();

    const foodItems = screen.getAllByTestId("items");
    expect(foodItems.length).toBe(6);

    const clearCart = screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(clearCart);
    const text = screen.getByText("Cart is Empty. Add items to the Cart!")
    expect(text).toBeInTheDocument();
    expect(screen.getAllByTestId("items").length).toBe(4);
})