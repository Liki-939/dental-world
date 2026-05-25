from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    LocationViewSet, TreatmentViewSet, DoctorViewSet,
    LandingPageViewSet, BlogViewSet, FAQViewSet,
    TestimonialViewSet, ReviewViewSet, GalleryViewSet,
    AppointmentViewSet
)

router = DefaultRouter()
router.register(r'locations', LocationViewSet)
router.register(r'treatments', TreatmentViewSet)
router.register(r'doctors', DoctorViewSet)
router.register(r'landing-pages', LandingPageViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'faqs', FAQViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'gallery', GalleryViewSet)
router.register(r'appointments', AppointmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
