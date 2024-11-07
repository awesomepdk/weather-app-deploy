const CurrentWeather = ({currentWeather}) => {
    return (
        <div className="current-weather">
            <img src={`weather-app-deploy/public/icons/${currentWeather.weatherIcon}.svg`} className="weather-icon" />
            <h2 className="temperature">
                {currentWeather.temperature} <span>°F</span>
            </h2>
            <p className="description">{currentWeather.description}</p>
        </div>
    );
};

export default CurrentWeather;