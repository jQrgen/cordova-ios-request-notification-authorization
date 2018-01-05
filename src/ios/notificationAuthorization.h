#import <Cordova/CDVPlugin.h>

@interface notificationAuthorization : CDVPlugin {
}

// The hooks for our plugin commands
- (void)echo:(CDVInvokedUrlCommand *)command;
- (void)getDate:(CDVInvokedUrlCommand *)command;
- (void)requestNotificationAuthorization:(CDVInvokedUrlCommand *)command;

@end
