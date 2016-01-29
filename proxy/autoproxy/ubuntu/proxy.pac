function FindProxyForURL(url, host)
{
    if (
        (isPlainHostName(host))
        || (shExpMatch(url,"*.local*"))
    ){
        return "DIRECT"
    }

    var PROXY = "PROXY cache-etu.univ-lille1.fr:3128"
    return PROXY;
}
