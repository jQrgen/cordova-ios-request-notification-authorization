#import <Cordova/CDVPlugin.h>

@interface notificationAuthorization : CDVPlugin {
}

- (void)requestNotificationAuthorization:(CDVInvokedUrlCommand *)command;

@end
