export function WeatherDetail({day, min, max, options}) {
    return (
        <>
            {/* <img src={options.img} alt="weather icon" /> */}
            <ul>
                <li><strong>Min:</strong> {min}°C</li>
                <li><strong>Max:</strong> {max}°C</li>
                <li><strong>Fahrenheit:</strong> {(min * 1.8 + 32).toFixed(1)}°F // {(max * 1.8 + 32).toFixed(1)}°F</li>
                <li><strong>Wind:</strong> {options.wind}</li>
                <li><strong>Humidity:</strong> {options.humidity}</li>
                <li><strong>Percipitation:</strong> {options.percipitation}</li>
            </ul>
        </>
    );
}