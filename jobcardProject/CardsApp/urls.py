from rest_framework import routers
from .api import CardViewSet

router = routers.DefaultRouter()
router.register('api/CardsApp', CardViewSet, 'CardsApp')

urlpatterns = router.urls