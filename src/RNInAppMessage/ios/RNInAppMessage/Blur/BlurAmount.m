#import "BlurAmount.h"
#import <objc/runtime.h>

@interface UIBlurEffect (Protected)

@property (nonatomic, readonly) id effectSettings;

@end

@implementation BlurAmount
@dynamic blurAmount;

+ (instancetype)effectWithStyle:(UIBlurEffectStyle)style {
  id instance = [super effectWithStyle:style];
  object_setClass(instance, self);
  return instance;
}

+ (instancetype)effectWithStyle:(UIBlurEffectStyle)style andBlurAmount:(NSNumber*)blurAmount {
  BlurAmount *effect = (BlurAmount*)[self effectWithStyle:style];
  effect.blurAmount = blurAmount;
  return effect;
}

- (void)setBlurAmount:(NSNumber*)blurAmount {
  objc_setAssociatedObject(self, @selector(blurAmount), blurAmount, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
}

- (NSNumber*)blurAmount {
  return objc_getAssociatedObject(self, @selector(blurAmount));
}

- (id)effectSettings {
    id settings = [super effectSettings];
    NSNumber *blurAmount = self.blurAmount;
    if (blurAmount) {
      [settings setValue:blurAmount forKey:@"blurRadius"];
    }
    return settings;
}

- (id)copyWithZone:(NSZone*)zone {
    id instance = [super copyWithZone:zone];
    object_setClass(instance, [self class]);
    objc_setAssociatedObject(instance, @selector(blurAmount), self.blurAmount, OBJC_ASSOCIATION_RETAIN_NONATOMIC);
    return instance;
}

@end
