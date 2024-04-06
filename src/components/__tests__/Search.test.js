import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restarurantsMock.json"
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

//WILL MOCK THE FETCH FUNCTION HERE : using jest.fn will mock the function which takes a callback function inside this will simulate the fetch function....
global.fetch = jest.fn(()=>{
    //1. fetch returns a promise : so will return promise resolve
    /*we will mock the fetch function... using jest.fn() and it takes a callback function and now here i will mock exactly how my fetch function works...fetch function returns promise so i will also have to return promise from this function which will be like object and on that object we call the json() method so this fetch function resolves with a json  and this json is again a function that returns a promise and that resolves actually has the data. 

    Fetch returns as a promise of datastrem and then we convert that into json which again returns a promise which is a data....
    */
    return Promise.resolve({
        json : ()=> Promise.resolve(MOCK_DATA)
    })
})

describe("Integration testing",()=>{
    // beforeAll(()=>{
    //     console.log("before all");
    // }) 
    // beforeEach(()=>{
    //     console.log("before each");
    // }) 
    // afterEach(()=>{
    //     console.log("after each");
    // })
    // afterAll(()=>{
    //     console.log("after all");
    // }) 
it("Should render body component with search button", async()=>{
    //WHEN U HAVE ASYNC AND STATE UPDATE U WRAP RENDER INSIDE ACT function which return a promise... so use async await
    //wrap it with act(which returns a promise.) and which takes async function and return your rendered component.
    await act(async ()=> render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>))

    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("search-input");//JAB KUCH SMJE NA KAISE FIND KARNEKA TAB USE THIS TEST ID TO FIND IT....

    fireEvent.change(searchInput, {target : {value : "ice"}})

    fireEvent.click(searchBtn);
    const searchedMenu = screen.getAllByTestId("res-card");
    // console.log(searchedMenu);
    // console.log(screen.debug());

    expect(searchedMenu.length).toBe(3);
    expect(searchBtn).toBeInTheDocument();

}),

it("Should render body component and return exact top rated res having start>4.4",async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
        <Body/>
        </BrowserRouter>))

    const topRatedBtn = screen.getByRole("button",{name : "Get Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    expect(screen.getAllByTestId("res-card").length).toBe(4);
})
})
