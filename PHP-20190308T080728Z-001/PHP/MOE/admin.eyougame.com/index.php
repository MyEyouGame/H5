<!DOCTYPE html>
<?php
// Create connection
	$con = mysqli_connect('localhost', 'root', '', 'moedata');
	// Check connection
	if (!$con) {
		die("Connection failed: " . mysqli_connect_error());
	}
	
	if(isset($_POST['save']))
	{	
		$atitle = mysqli_real_escape_string($con, $_POST['atitle']);
		$content = mysqli_real_escape_string($con, $_POST['editor1']);	

		$sql="INSERT INTO moe_content (title, content) VALUES ('$atitle', '$content')";

		if (mysqli_query($con, $sql)) {
			echo "New record created successfully";
		} else {
			echo "Error: " . $sql . "<br>" . mysqli_error($conn);
		}
	}
	
	$category = '游戏新闻' ;
	if(isset($_POST['news']))
	{
		$category = '游戏新闻' ;
	}
	
	$sql2 = "SELECT COUNT(*) FROM moe_content";
	$result2 = mysqli_query($con,$sql2);
	$r = mysqli_fetch_row($result2);
	$numrows = $r[0];		

	// number of rows to show per page
	$rowsperpage = 5;
	// find out total pages
	$totalpages = ceil($numrows / $rowsperpage);

	
	// get the current page or set a default
	if (isset($_GET['currentpage']) && is_numeric($_GET['currentpage'])) {
	   // cast var as int
	   $currentpage = (int) $_GET['currentpage'];
	} else {
	   // default page num
	   $currentpage = 1;
	} // end if

	// if current page is greater than total pages...
	if ($currentpage > $totalpages) {
	   // set current page to last page
	   $currentpage = $totalpages;
	} // end if
	// if current page is less than first page...
	if ($currentpage < 1) {
	   // set current page to first page
	   $currentpage = 1;
	} // end if

	// the offset of the list, based on current page 
	$offset = ($currentpage - 1) * $rowsperpage;

?>

<html>
<head>
	<title>《靈幻無雙英文》后台管理</title>
	<meta charset="utf-8"/>	
	<script src="//cdn.ckeditor.com/4.5.10/full/ckeditor.js"></script>
	<link rel="stylesheet" type="text/css" href="css/index.css" />
	<script type="text/javascript" src="js/scripts.js"></script>
</head>
<body>
	<table width="100%">
		<form method="POST">
			<tr>
				<td class="menu">
					<table width="100%">
						<tr>
							<td class="icon">
								<a href="//www.eyougame.com" target="_blank">
									<img src="images/logo.png" width="100%">
								</a>
							</td>
						</tr>
						<tr>
							<td class="icon2">
								<a name="new">
									<img src="images/new.png" class="new" width="100%">
								</a>
							</td>
						</tr>			
						<tr>
							<td class="icon3">
								<input value="" class="news" name="news" type="submit">  
							</td>
						</tr>
					</table>			
				</td>
				<td class="list">
					<table width="100%" style="padding:5%">
						<tr>
							<td class="title"  colspan="3">
								<label><?php echo $category; ?></label>
							</td>
						</tr>
						<tr>
							<td width="100%">
								<table class="line">
									<td class="records">
										<?php echo "<label style='font-weight:bold;color:black;'>".$numrows.'</label> 条记录'; ?>
									</td>
									<td style="width:10%;padding:5% 1% 0%">
										<?php
											if ($currentpage > 1) {
											   $prevpage = $currentpage - 1;
											   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$prevpage'><img src='images/left.png' class='left' id='left' onmouseover='left_mouseOver(this)' onmouseout='left_mouseOut(this)'/></a> ";
											}     																	
										?>		
									</td>
									<td style="width:10%;padding:5% 2% 0% 0%;">
										<?php
											if ($currentpage != $totalpages) {
											   $nextpage = $currentpage + 1;
											   echo " <a href='{$_SERVER['PHP_SELF']}?currentpage=$nextpage'><img src='images/right.png' class='right' id='right' onmouseover='right_mouseOver(this)' onmouseout='right_mouseOut(this)'/></a> ";
											} 
										?>	
									</td>
								</table>
							</td>
						</tr>
						<tr>
							<td class="alist"  colspan="3">
								<table width="100%">
									<?php
	
										$sql3 = "SELECT id,createtime, updatetime,title FROM moe_content LIMIT $offset, $rowsperpage";
										$result3 = mysqli_query($con, $sql3);

										if (mysqli_num_rows($result3) > 0) {
											// output data of each row
											while($row = mysqli_fetch_assoc($result3)) {
																					
									?>
									<tr>
										<td>	
											<input value="<?php 
												$id = $row['id'];
												if ($row['updatetime'] > 0) { 
													echo $row["updatetime"] ;
												}
												else{
													echo $row["createtime"];
												}
												echo $row["title"] ; 
											?>" class="listbtn" name="listbtn" type="submit">  
										</td>
									</tr>									
									<?php
										}
									} else {
											echo "0 records";
										}																
										mysqli_close($con);
									?>
								</table>
							</td>
						</tr>
					</table>		
				</td>	
				<td class="article" action="">
					<table width="100%">
						<tr>
							<td class="trash">
								<a> <img src="images/trash.png"></img> 删除 </a>
							</td>
						</tr>
						<tr>
							<td>
								<table class="line">
									<td class="option">
										<img src="images/bullet.png"></img> 
										<select class="selection">
											<option value="1">游戏新闻</option>
											<option value="2">游戏活动</option>
											<option value="3">游戏系统</option>
											<option value="4">游戏攻略</option>
											
											<option value="5">游戏介绍</option>
											<option value="6">成为大师</option>
											<option value="7">新手指引</option>
											<option value="8">系统简介</option>
										</select>
										| <input value="保存" class="save" name="save" type="submit"> 
									</td>
								</table>
							</td>
						</tr>
						<tr>
							<td>
								<input class="atitle" name="atitle" placeholder="请输入标题"  type="text">
							</td>
						</tr>
						<tr>
							<td>
								<textarea name="editor1" id="editor1"></textarea>
								<script>
									// Replace the <textarea id="editor1"> with a CKEditor
									// instance, using default configuration.
									CKEDITOR.replace( 'editor1' );
								</script>
							</td>
						</tr>
					</table>
				</form>
			</td>
		</tr>
	</table><?php $up = '1';?>
</body>		
</html>