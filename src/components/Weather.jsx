import {WeatherDetail} from "./WeatherDetail.jsx";

export function Weather({day, min, max, selected, setSelected, ...options}) {

    
    return (
        <>
            <h2 onClick={() => setSelected(day)}><strong>Day:</strong> {day}</h2>
            
            {selected === day &&
            <WeatherDetail day={day} min={min} max={max} options={options} />}
            
            {selected !== day && 
            (
                <>
            <p><strong>Minimum temp.:</strong> {min} °C</p>
            <p><strong>Maximum temp.:</strong> {max} °C</p>
</>
            )}
            
        </>
    );
}