import { General } from "./style";

export default function Layout() {
    return (
        <General>
            <div>
                <fieldset>
                    <legend>Filter</legend>
                    <select name="filter" id="filter" style={{ width: '200px', height: '30px' }} >
                        <option value="1">Fire</option>
                        <option value="2">Water</option>
                        <option value="3">Air</option>
                        <option value="4">Earth</option>
                        <option value="5">Heart</option>
                    </select>
                </fieldset>

                <div>
                    <p>

                        Here we go
                </p>
                </div>
                <div>
                    <p>

                        Here we go
                </p>
                </div>
            </div>
        </General>
    )
}