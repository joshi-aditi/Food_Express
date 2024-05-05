import { fireEvent, render,screen} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import Mock_Data from "../mocks/resMenu.json"
import { act } from "react-dom/test-utils"
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(Mock_Data);
        }
    })
})

it("Should load the resmenu component",async()=>{
    await act(async ()=> {
        render(
        
        <Provider store = {appStore}>
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
            <Cart/>
        <RestaurantMenu/>
        </Provider>
        )
    })

    const accordianHeader = screen.getByText("New Thin n Crispy Pizzas (6)");
    expect(accordianHeader).toBeInTheDocument();

    fireEvent.click(accordianHeader);
    const items = screen.getAllByTestId("items");
    expect(items.length).toBe(6);

    const addBtn = screen.getAllByRole("button",{name : "ADD +"});
    fireEvent.click(addBtn[0]);

    fireEvent.click(addBtn[1]);

    const cartText = screen.getByText("Cart - (2 Items)")
    expect(cartText).toBeInTheDocument();
    const cartItems = screen.getAllByTestId("items-cart");
    expect(cartItems.length).toBe(2);
    
    const cartBtn = screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(cartBtn);
    
    const textEmpty = screen.getByText("Cart is Empty. Add items to the Cart!");
    expect(textEmpty).toBeInTheDocument();

    //using cart items its not working...
})