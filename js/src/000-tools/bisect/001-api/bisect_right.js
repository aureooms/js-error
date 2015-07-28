
const bisect_right = function ( a , x , lo = 0 , hi = a.length ) {

	if ( lo < 0 ) throw new ValueError( "lo must be non-negative" ) ;

    while ( lo < hi ) {

        mid = ( lo + hi ) / 2 | 0 ;

        if ( x < a[mid] ) hi = mid ;

        else lo = mid + 1 ;

	}

    return lo ;

} ;

bisect.bisect_right = bisect_right ;