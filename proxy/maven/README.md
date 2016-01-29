Lorsque vous êtes derrière un proxy (comme au M3) vous devez éditer (à défaut créer) le fichier suivant : ~/.m2/settings.xml

    Mettez dedans le code suivant ...

     <settings>  
      <proxies>
       <proxy>
          <active>true</active>
          <protocol>http</protocol>
          <host>cache-etu.univ-lille1.fr</host>
          <port>3128</port>
          <nonProxyHosts>*.univ-lille1.fr</nonProxyHosts>
        </proxy>
      </proxies>
     </settings>

