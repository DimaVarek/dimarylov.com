function LocationSpan({location}) {
    return ( 
        <span className="location-span">
            {'[guest '+location+'] # '}
        </span>
     );
}

export default LocationSpan;