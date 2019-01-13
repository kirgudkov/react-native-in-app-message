#import <Foundation/Foundation.h>
#import "Blur.h"
#import "BlurManager.h"

#if __has_include(<React/RCTBridge.h>)
#import <React/RCTBridge.h>
#elif __has_include(“RCTBridge.h”)
#import “RCTBridge.h”
#else
#import “React/RCTBridge.h” // Required when used as a Pod in a Swift project
#endif

@implementation BlurManager

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

- (UIView *)view
{
  return [[Blur alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(blurType, NSString);
RCT_EXPORT_VIEW_PROPERTY(blurAmount, NSNumber);

@end
