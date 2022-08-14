<h1><span>Coordinates parser</span></h1>

<h2>Supported format notations</h2>

<h3><span>DD (decimal degrees)</span></h3>

<table>
  <tr>
    <td>
      <p><b><span
      >Supported latitude</span></b></p>
    </td>
    <td>
      <p><b><span
      >Supported longitude</span></b></p>
    </td>
    <td>
      <p><b><span
      >Example</span></b></p>
    </td>
  </tr>
  <tr>
    <td>
      <p>[ + | - | N |
        S ] &lt;DD.dd&gt; [ + | - | N | S ]</p>
    </td>
    <td>
      <p>[ + | - | E |
        W ] &lt;DDD.dd&gt; [ + | - | E | W ]</p>
    </td>
    <td>
      <p>40.730, -73.935</p>
      <p>40.730,
        73.935-</p>
      <p>N 40.730, W 73.935</p>
      <p>40.730 N,
        73.935 W</p>
      <p>40.730° N,
        73.935° W</p>
    </td>
  </tr>
</table>

<h3>DDM (degree minutes)</h3>

<table
>
  <tr>
    <td>
      <p><b><span
      >Supported latitude</span></b></p>
    </td>
    <td>
      <p><b><span
      >Supported longitude</span></b></p>
    </td>
    <td>
      <p><b><span
      >Example</span></b></p>
    </td>
  </tr>
  <tr>
    <td>
      <p>[ + | - | N |
        S ] &lt;DD MM.mmm&gt; [ + | - | N | S ]</p>
    </td>
    <td>
      <p>[ + | - | E |
        W ] &lt;DDD MM.mmm&gt; [ + | - | E | W ]</p>
    </td>
    <td>
      <p>40 43.836, -73
        56.114</p>
      <p>40 43.836, 73
        56.114-</p>
      <p>N 40 43.836, W
        73 56.114</p>
      <p>40 43.836 N, 73
        56.114 W</p>
      <p>40° 43.836' N,
        73° 56.114' W</p>
    </td>
  </tr>
</table>

<h3><span>DMS (degree minute seconds)</span></h3>

<table
>
  <tr>
    <td>
      <p><b><span
      >Supported latitude</span></b></p>
    </td>
    <td>
      <p><b><span
      >Supported longitude</span></b></p>
    </td>
    <td>
      <p><b><span
      >Example</span></b></p>
    </td>
  </tr>
  <tr>
    <td>
      <p>[ + | - | N |
        S ] &lt;DD MM SS.sss&gt; [ + | - | N | S ]</p>
    </td>
    <td>
      <p>[ + | - | E |
        W ] &lt;DDD MM SS.sss&gt; [ + | - | E | W ]</p>
    </td>
    <td>
      <p>40° 43' 50.196&quot;,
        -73° 56' 6.871&quot;</p>
      <p>40° 43' 50.196&quot;,
        73° 56' 6.871&quot;-</p>
      <p>40° 43' 50.196&quot;
        N, 73° 56' 6.871&quot; W</p>
      <p>N 40° 43' 50.196&quot;,
        W 73° 56' 6.871&quot;</p>
    </td>
  </tr>
</table>

<h3>Degree, minute, and second marks</h3>

<table
>
  <tr>
    <td>
      <p><b><span
      >Mark type</span></b></p>
    </td>
    <td>
      <p><b><span
      >Supported mark</span></b></p>
    </td>
    <td>
      <p><b><span
      >Unicode</span></b></p>
    </td>
    <td>
      <p><b><span
      >Example</span></b></p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Degree marks</p>
    </td>
    <td>
      <p>Degree sign °</p>
    </td>
    <td>
      <p>U+00B0</p>
    </td>
    <td>
      <p>40° 43' 50.196&quot;,
        -73° 56' 6.871&quot;</p>
    </td>
  </tr>
  <tr>
<td>
      <p>Degree marks</p>
    </td>
    <td>
      <p>Ring above °</p>
    </td>
    <td>
      <p>U+02DA</p>
    </td>
    <td>
      <p>40&#730; 43' 50.196&quot;,
        -73&#730; 56' 6.871&quot;</p>
    </td>
  </tr>
  <tr>
<td>
      <p>Degree marks</p>
    </td>
    <td>
      <p>Masculine
        Ordinal Indicator &ordm;</p>
    </td>
    <td>
      <p>U+00BA</p>
    </td>
    <td>
      <p>40&ordm; 43'
        50.196&quot;, -73&ordm; 56' 6.871&quot;</p>
    </td>
  </tr>
  <tr>
<td>
      <p>Degree marks</p>
    </td>
    <td>
      <p>Tilde ~</p>
    </td>
    <td>
      <p>U+007E</p>
    </td>
    <td>
      <p>40~ 43'
        50.196&quot;, -73~ 56' 6.871&quot;</p>
    </td>
  </tr>
  <tr>
<td>
      <p>Degree marks</p>
    </td>
    <td>
      <p>Asterisk *</p>
    </td>
    <td>
      <p>U+002A</p>
    </td>
    <td>
      <p>40* 43'
        50.196&quot;, -73* 56' 6.871&quot;</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Minute marks</p>
    </td>
    <td>
      <p>Minute sign &#8242;</p>
    </td>
    <td>
      <p>U+2032</p>
    </td>
    <td>
      <p>40° 43&#8242;
        50.196&quot;, -73° 56&#8242; 6.871&quot;</p>
    </td>
  </tr>
  <tr>
<td>
      <p>Minute marks</p>
    </td>
    <td>
      <p>Apostrophe '</p>
    </td>
    <td>
      <p>U+0027</p>
    </td>
    <td>
      <p>40° 43'
        50.196&quot;, -73° 56' 6.871&quot;</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>Second marks</p>
    </td>
    <td>
      <p>Quotation
        mark &quot;</p>
    </td>
    <td>
      <p>U+0022</p>
    </td>
    <td>
      <p>40° 43'
        50.196&quot;, -73° 56' 6.871&quot;</p>
    </td>
  </tr>
  <tr>
<td>
      <p>Second marks</p>
    </td>
    <td>
      <p>Diaeresis &uml;</p>
    </td>
    <td>
      <p>U+00A8</p>
    </td>
    <td>
      <p>40° 43' 50.196&uml;,
        -73° 56' 6.871&uml;</p>
    </td>
  </tr>
  <tr>
<td>
      <p>Second marks</p>
    </td>
    <td>
      <p>Double acute
        accent &#733;</p>
    </td>
    <td>
      <p>U+02DD</p>
    </td>
    <td>
      <p>40° 43'
        50.196&#733;, -73° 56' 6.871&#733;</p>
    </td>
  </tr>
</table>

<h3><span>Coordinates pair separators</span></h3>

<table
>
  <tr>
    <td>
      <p><b><span
      >Separator</span></b></p>
    </td>
    <td>
      <p><b><span
      >Example</span></b></p>
    </td>
  </tr>
  <tr>
    <td>
      <p>space</p>
    </td>
    <td>
      <p>40° 43’
        50.196” -173° 56’ 6.871”</p>
      <p>N 40° 43’
        50.196” W 173° 56’ 6.871”</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>/</p>
    </td>
    <td>
      <p>40° 43’
        50.196” / -173° 56’ 6.871”</p>
      <p>N 40° 43’
        50.196” / W 173° 56’ 6.871”</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>\</p>
    </td>
    <td>
      <p>40° 43’
        50.196” \ -173° 56’ 6.871”</p>
      <p>N 40° 43’
        50.196” \ W 173° 56’ 6.871”</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>|</p>
    </td>
    <td>
      <p>40° 43’
        50.196” | -173° 56’ 6.871”</p>
      <p>N 40° 43’
        50.196” | W 173° 56’ 6.871”</p>
    </td>
  </tr>
  <tr>
    <td>
      <p>,</p>
    </td>
    <td>
      <p>40° 43’
        50.196”, -173° 56’ 6.871”</p>
      <p>N 40° 43’
        50.196”, -W 173° 56’ 6.871”</p>
    </td>
  </tr>
</table>

<h2>Technical notes</h2>

<p>WGS 1984 is assumed.</p>

<p>Any coordinate
  pair with space separator must use the same notation format. <span
  >N 40.730 173° 56' 6.871&quot; W</span> is
  invalid input.</p>
