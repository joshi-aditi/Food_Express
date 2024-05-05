import Header from "../../components/Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render header component",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>)
    
})

it("Should render header component with login btn",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>)

    const loginBtn = screen.getByRole("button", {name:"Login"});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", {name:"Logout"});
    expect(logoutBtn).toBeInTheDocument();
})

it("Should render header component with Cart - (0 Items)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Log the rendered output for debugging
//   debug();

  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});
