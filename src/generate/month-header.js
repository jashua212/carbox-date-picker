import setup_day_grid from './day-grid';
import { months } from '../names';

function create_change_month_button(selected_time, text, offset, month_name, day_grid, input) {
    const button = document.createElement("button");
    button.addEventListener("click", () => {
        selected_time.set_time(new Date(selected_time.get_time().getFullYear(), selected_time.get_time().getMonth()+offset));
        setup_day_grid(day_grid, selected_time, input);
        month_name.textContent = months[selected_time.get_time().getMonth()];
    })
    button.textContent = text;
    return button;
}

export default function setup_month_header(month_header, day_grid, selected_time, input) {
    const month_name = document.createElement("div");
    month_name.className = "width-100px display-inline-block";
    month_name.textContent = months[selected_time.get_time().getMonth()];
    const backwardButton = create_change_month_button(selected_time, "<", -1, month_name, day_grid, input);
    const forwardButton = create_change_month_button(selected_time, ">", +1, month_name, day_grid, input);
    
    month_header.append(backwardButton, month_name, forwardButton);
    return selected_time;
}