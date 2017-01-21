function ajaxHandler(_url, _obj)
{
    var _params = getParamString(_obj);
    console.log("------ ajaxHandler ------");
    console.log("_url : ", _url);
    console.log("_obj : ", _obj);
    $.ajax(
    {
        type: "POST",
        url: "components/controller/" + _url,
        data: _params,
        success: function(html)
        {
            ajaxCallback(_url, html);
        },
		error: function(html)
        {
           console.log("html = ",html);
        }
    });
}

function ajaxCallback(url, html)
{
    console.log("------ ajaxCallback ------");
    console.log("url : ", url);
	//console.log("html :", html);
    switch (url)
    {
        case "searchApp.php":
            _searchApp(html);
            break;
        case "deleteApp.php":
            _deleteApp(html);
            break;
        case "getUserData.php":
            _getUserData(html);
			//console.log("html :", html);
            break;
        case "deleteComment.php":
            _deleteComment(html);
            break;
        case "register.php":
		console.log("html = ",html);
            _register(html);
            break;
        case "checkForValidUser.php":
            _checkForValidUser(html);
            break;
        case "checkForValidUserMail.php":
            _checkForValidUserMail(html);
            break;
        case "updateProfileParams.php":
            //console.log("from update profile params _ajaxTempObj", _ajaxTempObj);
			$(".pageLoader").fadeOut(700);
            break;
        case "login.php":
            _login(html);
			console.log("html :", html);
            break;
        case "logOut.php":
            _logOut(html);
            break;
        case "postSubComment.php":
            _postComment(html);
			console.log("html :", html);
            break;
        case "postMainComment.php":
            _postMainComment(html);
			console.log("html :", html);
            break;
        case "getComments.php":
            _getComments(html);
            break;
        case "addApp.php":
		console.log("html = ",html);
		$(".pageLoader").fadeOut(300);
            _addApp(html);
            break;
        case "getAppCode.php":
            _getAppCode(html);
            break;
        case "getAllApps.php":
		//console.log(html);
		 $(".pageLoader").fadeOut(1000);
          _getAllApps(html);
            break;
        case "getMyApps.php":
            _getMyApps(html);
            break;
        case "updateApp.php":
		console.log("html = ",html);
            _updateApp(html);
            break; 
			case "postBug.php":
            _postBugHandler(html);
            break;
			case "getBugs.php":
            _getBugs(html);
            break;
			case "getUsers.php":
            _getUsers(html);
            break;
			case "updateLikes.php":
            _updateLikes(html);
            break;
			case "checkForOldPassword.php":
			_checkForOldPassword(html);
           console.log("html = ",html);
            break;
			case "changePassword.php":
			//_checkForOldPassword(html);
			_changePassword(html);
           console.log("html = ",html);
            break;
			case "forgetPassword.php":
			//_checkForOldPassword(html);
			_forgetPassword(html);
           //console.log("html = ",html);
            break;
			case "changeUserinfo.php":
			//_checkForOldPassword(html);
			_changeUserinfo(html);
           //console.log("html = ",html);
            break;
			case "facebookLogin.php":
			_facebookLogin(html);
           //console.log("html = ",html);
            break;
			case "checkForNotifications.php":
			_checkForNotifications(html);
         //  console.log("html = ",html);
            break;
			case "getNotifications.php":
			_getNotifications(html);
         //  console.log("html = ",html);
            break;
			case "updateNotifications.php":
			//_getNotifications(html);
			console.log("html = ",html);
            break;
			case "updateVote.php":
			_updateVote(html);
			//console.log("html = ",html);
            break;
			case "updateCommentVote.php":
			_updateCommentVote(html);
			//console.log("html = ",html);
            break;
    }
}
/* ============= AJAX CALLBACK FUNCTIONS ========================= */
function _searchApp(html)
{
    showSearchResult(convertJSON(html));
};







/* =============================================================== */
/**
========== 	this function creates a a post string of params to post via ajax
**/
function getParamString(obj)
{
    var _str = "";
    for (var i in obj)
    {
        _str += i + "=" + encodeString(obj[i]) + "&";
    }
    _str = _str.substring(0, _str.length - 1);
    return _str;
}


