// Converts SerializeJSON output into a workable array
function convertColdFusionJSON( serialObj )
{
    var s = serialObj || {};
    if( !s.COLUMNS && !s.DATA )
    {
        console.error("convertColdFusionJSON() >>  was not passed a coldfusion serialized object");
        return [];
    }
    //Create returned object
    var obj = [];
    //Loops through serialObj and matches the columns
    for(var i=0; i < s.DATA.length; i++)
    {
        var temp = {};
        for(var j=0; j < s.COLUMNS.length; j++)
        {
            temp[s.COLUMNS[j]] = s.DATA[i][j];
        }
 
        // save the new row with column names
        obj.push(temp);
    }
 
    // Return the objects
    return obj;
}