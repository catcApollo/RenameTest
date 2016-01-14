(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('dashboard/dashboard.tpl.html',
    '<div class="row alerts-container" data-ng-controller="dashboardController" data-ng-show="alerts.length">\n' +
    '  <div class="col-xs-12">\n' +
    '    <alert data-ng-repeat="alert in alerts" type="{{alert.type}}" close="closeAlert($index)">{{alert.msg}}</alert>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row">\n' +
    '	<div class="col-lg-3 col-md-6 col-xs-12">\n' +
    '		<rd-widget>\n' +
    '			<rd-widget-body>\n' +
    '				<div class="widget-icon green pull-left">\n' +
    '					<i class="fa fa-users"></i>\n' +
    '				</div>\n' +
    '				<div class="title">80</div>\n' +
    '				<div class="comment">Users</div>\n' +
    '			</rd-widget-body>\n' +
    '		</rd-widget>\n' +
    '	</div>\n' +
    '	<div class="col-lg-3 col-md-6 col-xs-12">\n' +
    '		<rd-widget>\n' +
    '			<rd-widget-body>\n' +
    '				<div class="widget-icon red pull-left">\n' +
    '					<i class="fa fa-tasks"></i>\n' +
    '				</div>\n' +
    '				<div class="title">16</div>\n' +
    '				<div class="comment">Servers</div>\n' +
    '			</rd-widget-body>\n' +
    '		</rd-widget>\n' +
    '	</div>\n' +
    '	<div class="col-lg-3 col-md-6 col-xs-12">\n' +
    '		<rd-widget>\n' +
    '			<rd-widget-body>\n' +
    '				<div class="widget-icon orange pull-left">\n' +
    '					<i class="fa fa-sitemap"></i>\n' +
    '				</div>\n' +
    '				<div class="title">225</div>\n' +
    '				<div class="comment">Documents</div>\n' +
    '			</rd-widget-body>\n' +
    '		</rd-widget>\n' +
    '	</div>\n' +
    '	<div class="col-lg-3 col-md-6 col-xs-12">\n' +
    '		<rd-widget>\n' +
    '			<rd-widget-body>\n' +
    '				<div class="widget-icon blue pull-left">\n' +
    '					<i class="fa fa-support"></i>\n' +
    '				</div>\n' +
    '				<div class="title">62</div>\n' +
    '				<div class="comment">Tickets</div>\n' +
    '			</rd-widget-body>\n' +
    '		</rd-widget>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row">\n' +
    '	<div class="col-lg-6">\n' +
    '		<rd-widget>\n' +
    '      		<rd-widget-header icon="fa-tasks" title="Servers">\n' +
    '				<a href="#">Manage</a>\n' +
    '      		</rd-widget-header>\n' +
    '      		<rd-widget-body classes="medium no-padding">\n' +
    '				<div class="table-responsive">\n' +
    '					<table class="table">\n' +
    '						<tbody>\n' +
    '							<tr><td>RDVMPC001</td><td>238.103.133.37</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '							<tr><td>RDVMPC002</td><td>68.66.63.170</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '							<tr><td>RDVMPC003</td><td>76.117.212.33</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>\n' +
    '							<tr><td>RDPHPC001</td><td>91.88.224.5</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '							<tr><td>RDESX001</td><td>197.188.15.93</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '							<tr><td>RDESX002</td><td>168.85.154.251</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '							<tr><td>RDESX003</td><td>209.25.191.61</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>\n' +
    '							<tr><td>RDESX004</td><td>252.37.192.235</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '							<tr><td>RDTerminal01</td><td>139.71.18.207</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '							<tr><td>RDTerminal02</td><td>136.80.122.212</td><td><span tooltip="Could not connect!" class="text-warning"><i class="fa fa-flash"></i></span></td></tr>\n' +
    '							<tr><td>RDDomainCont01</td><td>196.80.245.33</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '						</tbody>\n' +
    '					</table>\n' +
    '				</div>\n' +
    '			</rd-widget-body>\n' +
    '		</rd-widget>\n' +
    '	</div>\n' +
    '	<div class="col-lg-6">\n' +
    '		<rd-widget>\n' +
    '			<rd-widget-header icon="fa-users" title="Users">\n' +
    '				<input type="text" placeholder="Search" class="form-control input-sm" />\n' +
    '			</rd-widget-header>\n' +
    '			<rd-widget-body classes="medium no-padding">\n' +
    '				<div class="table-responsive">\n' +
    '					<table class="table">\n' +
    '						<thead>\n' +
    '							<tr><th class="text-center">ID</th><th>Username</th><th>Role</th><th>Account</th></tr>\n' +
    '						</thead>\n' +
    '						<tbody>\n' +
    '							<tr><td class="text-center">1</td><td>Joe Bloggs</td><td>Super Admin</td><td>AZ23045</td></tr>\n' +
    '							<tr><td class="text-center">2</td><td>Timothy Hernandez</td><td>Admin</td><td>AU24783</td></tr>\n' +
    '							<tr><td class="text-center">3</td><td>Joe Bickham</td><td>User</td><td>AM23781</td></tr>\n' +
    '						</tbody>\n' +
    '					</table>\n' +
    '        		</div>\n' +
    '			</rd-widget-body>\n' +
    '		<rd-widget>\n' +
    '	</div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="row">\n' +
    '	<div class="col-lg-6">\n' +
    '   		<rd-widget>\n' +
    '   			<rd-widget-header icon="fa-plus" title="Extras">\n' +
    '   				<button class="btn btn-sm btn-info">Button</button>\n' +
    '   			</rd-widget-header>\n' +
    '   			<rd-widget-body>\n' +
    '				<div class="message">\n' +
    '					This is a standard message which will also work the ".no-padding" class, I can also <span class="error">be an error message!</span>\n' +
    '				</div>\n' +
    '				<hr />\n' +
    '				<div class="message">\n' +
    '					<a href="http://angular-ui.github.io/bootstrap/" target="_blank">UI Bootstrap</a> is included, so you can use <a href="#" tooltip="I\'m a tooltip!">tooltips</a> and all of the other native Bootstrap JS components!\n' +
    '				</div>\n' +
    '   			</rd-widget-body>\n' +
    '   		</rd-widget>\n' +
    '	</div>\n' +
    '	<div class="col-lg-6">\n' +
    '		<rd-widget>\n' +
    '			<rd-widget-header icon="fa-cog fa-spin" title="Loading Directive">\n' +
    '				<a href="http://tobiasahlin.com/spinkit/" target="_blank">SpinKit</a>\n' +
    '			</rd-widget-header>\n' +
    '			<rd-widget-body>\n' +
    '				<rd-loading></rd-loading>\n' +
    '			</rd-widget-body>\n' +
    '		</rd-widget>\n' +
    '	</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.templates');
} catch (e) {
  module = angular.module('app.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('table/tables.tpl.html',
    '<div class="row">\n' +
    '  <div class="col-lg-6">\n' +
    '    <rd-widget>\n' +
    '      <rd-widget-header icon="fa-tasks" title="Servers">\n' +
    '        <a href="#">Manage</a>\n' +
    '      </rd-widget-header>\n' +
    '      <rd-widget-body classes="medium no-padding">\n' +
    '        <div class="table-responsive">\n' +
    '          <table class="table">\n' +
    '            <tbody>\n' +
    '              <tr><td>RDVMPC001</td><td>238.103.133.37</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDVMPC002</td><td>68.66.63.170</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDVMPC003</td><td>76.117.212.33</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>\n' +
    '              <tr><td>RDPHPC001</td><td>91.88.224.5</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDESX001</td><td>197.188.15.93</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDESX002</td><td>168.85.154.251</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDESX003</td><td>209.25.191.61</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>\n' +
    '              <tr><td>RDESX004</td><td>252.37.192.235</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDTerminal01</td><td>139.71.18.207</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDTerminal02</td><td>136.80.122.212</td><td><span tooltip="Could not connect!" class="text-warning"><i class="fa fa-flash"></i></span></td></tr>\n' +
    '              <tr><td>RDDomainCont01</td><td>196.80.245.33</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>      \n' +
    '      </rd-widget-body>\n' +
    '      <rd-widget-footer>\n' +
    '        <ul class="pagination pagination-sm pull-right">\n' +
    '          <li><a href="#">&laquo;</a></li>\n' +
    '          <li><a href="#">1</a></li>\n' +
    '          <li><a href="#">2</a></li>\n' +
    '          <li><a href="#">3</a></li>\n' +
    '          <li><a href="#">4</a></li>\n' +
    '          <li><a href="#">5</a></li>\n' +
    '          <li><a href="#">&raquo;</a></li>\n' +
    '        </ul>\n' +
    '        <div class="clearfix"></div>\n' +
    '      </rd-widget-footer>\n' +
    '    </rd-widget>\n' +
    '  </div>\n' +
    '  <div class="col-lg-6">\n' +
    '    <rd-widget>\n' +
    '      <rd-widget-header icon="fa-tasks" title="Striped Servers">\n' +
    '        <a href="#">Manage</a>\n' +
    '      </rd-widget-header>\n' +
    '      <rd-widget-body classes="medium no-padding">\n' +
    '        <div class="table-responsive">\n' +
    '          <table class="table table-striped">\n' +
    '            <tbody>\n' +
    '              <tr><td>RDVMPC001</td><td>238.103.133.37</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDVMPC002</td><td>68.66.63.170</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDVMPC003</td><td>76.117.212.33</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>\n' +
    '              <tr><td>RDPHPC001</td><td>91.88.224.5</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDESX001</td><td>197.188.15.93</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDESX002</td><td>168.85.154.251</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDESX003</td><td>209.25.191.61</td><td><span tooltip="Server Down!" class="text-danger"><i class="fa fa-warning"></i></span></td></tr>\n' +
    '              <tr><td>RDESX004</td><td>252.37.192.235</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDTerminal01</td><td>139.71.18.207</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '              <tr><td>RDTerminal02</td><td>136.80.122.212</td><td><span tooltip="Could not connect!" class="text-warning"><i class="fa fa-flash"></i></span></td></tr>\n' +
    '              <tr><td>RDDomainCont01</td><td>196.80.245.33</td><td><span class="text-success"><i class="fa fa-check"></i></span></td></tr>\n' +
    '            </tbody>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '      </rd-widget-body>\n' +
    '      <rd-widget-footer>\n' +
    '        <ul class="pagination pagination-sm pull-right">\n' +
    '          <li><a href="#">&laquo;</a></li>\n' +
    '          <li><a href="#">1</a></li>\n' +
    '          <li><a href="#">2</a></li>\n' +
    '          <li><a href="#">3</a></li>\n' +
    '          <li><a href="#">&raquo;</a></li>\n' +
    '        </ul>\n' +
    '        <div class="clearfix"></div>\n' +
    '      </rd-widget-footer>\n' +
    '    </rd-widget>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
