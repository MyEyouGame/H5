<!DOCTYPE html>

<?php
/* require_once 'db_connection.php';
if(isset($_POST['submit']))
{
	$username = $_POST['username'] ;
	$sql = "SELECT username, password FROM admin where username = $username ";
	$result = mysqli_query($conn, $sql);

	if(($row = mysqli_fetch_assoc($result))!=null)
	{
		if($row[2]==$password)
		{
			return true;
		}
	}
	else 
	{
		return false;
	}
} */
?>
<html>
 <head>
  <title>eYougame-游戏管理后台</title>
  <script type="text/javascript" src="js/1.9.1_jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/login.css" />
	 <script type="text/javascript">
		$(document).ready(function(){
		$("#new").click(function() {
		$("#captcha").attr("src", "captcha.php?"+Math.random());
		});    
		});
	</script>
 </head>
 <body>
 <div class="login" id="login">
	<div class="mod">
		<form action="" method="post">
		   <table width="100%">
				<tr>
					<td>
						<label>用户名</label>
						<input class="form-control" placeholder="请输入用户名" name="username" type="text"/>
					</td>	
				</tr>
				<tr>
					<td>
						<label>密码</label>
						<input class="form-control" placeholder="请输入密码" name="password" type="password"/>
					</td>	
				</tr>
				<tr>
					<td>
						<label>验证码</label>					 											
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1" style="padding:0;">
								<a href="#new" id="new">
									<img src="captcha.php" alt="CAPTCHA!" id="captcha"/>
								</a>	
							</span>
							<input class="form-control" style="margin:0 !important;placeholder" placeholder="请输入验证码" aria-describedby="basic-addon1" name="verfiy" type="text">
						</div>
					</td>	
				</tr>
				<tr>
					<td>
						<input type="submit" name="submit" value="登录" class="btn btn-primary"/>
					</td>
				</tr>
			</table>
		</form>
	</div>
  </div>
 </body>
</html>