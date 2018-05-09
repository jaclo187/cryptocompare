<!DOCTYPE html>
<html>
	<head>
		<title>Crypto Compare</title>
		<meta charset=utf-8>
		<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
		<meta name="msapplication-TileColor" content="#2b5797">
		<meta name="theme-color" content="#ffffff">
		<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
		<link rel="manifest" href="site.webmanifest">
		<link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
		<link rel="stylesheet" href="style.css">
		<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
		<script src=script.js></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
	</head>
	<body>
		<main>
			<table>
				<thead></thead>
				<tbody>
					<tr>
						<td><label for=slc1></label><select id='slc1'><option>Currency:</option></select></td>
						<td><h1>Crypto Compare</h1> </td>
						<td><label for=slc2></label><select id='slc2'><option>Currency:</option></select></td>
					</tr>
					<tr>
						<td>
                            <dl id="left">

                            </dl>
                        </td>
						<td>
                            <dl>
                                <dd>Name</dd>
                                <dd>Symbol</dd>
                                <dd>Rank</dd>
                                <dd>Price USD</dd>
                                <dd>Price BTC</dd>
                                <dd>24h Trade Volume USD</dd>
                                <dd>Total Market Cap</dd>
                                <dd>Available Supply</dd>
                                <dd>Total Supply</dd>
                                <dd>Max Supply</dd>
                                <dd>Percent Change 1h</dd>
                                <dd>Percent Change 24h</dd>
                                <dd>Percent Change 7d</dd>
                            </dl>
                        </td>
						<td>
                            <dl id="right">

                            </dl>
                        </td>
					</tr>
                    <tr>
                        <td></td>
                        <td>
                            <canvas id="chart"></canvas>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <h2>Compare History:</h2>
                            <dl id="hist">

                            </dl>
                        </td>
                        <td></td>
                    </tr>
				</tbody>
			</table>
		</main>
	</body>
</html>