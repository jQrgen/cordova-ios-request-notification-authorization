#import "notificationAuthorization.h"

#import <Cordova/CDVAvailability.h>
#import <PushKit/PushKit.h>
#import <UserNotifications/UserNotifications.h>

@implementation notificationAuthorization

- (void)pluginInitialize {
}

-(void)requestNotificationAuthorization:(CDVInvokedUrlCommand *)command {
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    center.delegate = self;
    [center requestAuthorizationWithOptions:(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge) completionHandler:^(BOOL granted, NSError * _Nullable error) {
    }];
}

@end
