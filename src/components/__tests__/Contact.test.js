import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

//heading testing :
it("should load contact us page",()=>{
    //render
    render(<Contact/>);

    //query
    const heading = screen.getByRole("heading");

    //assertion 
    expect(heading).toBeInTheDocument();
})

//button testing : 
test("should load button inside contact page",()=>{
    render(<Contact/>)
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

//ip box with placeholder name is loaded or no check
it("should load ip box with placeholder name",()=>{
    render(<Contact/>)
    const ipWithNamePlaceholder = screen.getByPlaceholderText("Enter Your Name");
    expect(ipWithNamePlaceholder).toBeInTheDocument();
})

// inputs testing : 
it("should load 2 ip boxes",()=>{
    render(<Contact/>)
    const ipboxes = screen.getAllByRole("textbox");
    // console.log(ipboxes);
    expect(ipboxes.length).toBe(2);
})


