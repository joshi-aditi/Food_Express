import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render rescard with data",()=>{
    render(<ResCard resdata = {MOCK_DATA}/>)

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
})
